import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Form, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { uploadThumbnail } from "../api";
import { ResultCard } from "./ResultCard";
import { LoadingCard } from "./LoadingCard";
import { ThumbnailFormSchema } from "../types";

function UploadThumbnail() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(ThumbnailFormSchema)
  });
  const uploadThumbnailMutation = useMutation({
    retry: 3,
    mutationFn: async (file: File) => await uploadThumbnail(file),
    onError: () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong with our AI. Please try again!",
      });
    },
  });

  return (
    <div className="lg:w-1/2 w-4/5 p-7 rounded-md bg-zinc-700">
      {uploadThumbnailMutation.isLoading && <LoadingCard />}
      {uploadThumbnailMutation.isSuccess && (
        <ResultCard
          thumbnail={uploadThumbnailMutation.data}
          reset={uploadThumbnailMutation.reset}
        />
      )}
      {!uploadThumbnailMutation.isSuccess &&
        !uploadThumbnailMutation.isLoading && (
          <div className="items-center justify-center flex gap-4">
            <Form {...form}>
              <form
                className="space-y-4 text-center"
                onSubmit={form.handleSubmit(async (values) =>
                  uploadThumbnailMutation.mutate(values.file),
                )}
              >
                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => (
                    <FormItem>
                      <Input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Upload</Button>
              </form>
            </Form>
          </div>
        )}
    </div>
  );
}

export { UploadThumbnail };
