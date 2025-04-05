import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"

const MethodologySection = () => {
  return (
    <div className="bg-zinc-900 dark:bg-neutral-900 py-16 mb-8">
      <div className="mx-auto px-4 max-w-3xl w-full text-white">
        <h2 className="text-4xl font-bold mb-4">Our methodology</h2>
        <div className="mt-12 flex flex-col gap-8">
          <Card className="cursor-pointer p-5 bg-neutral-900 text-white">
            <CardHeader>
              <CardTitle>✅ Transparency in the process</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                You&apos;ll have access to periodic progress reports. <br/>
                You&apos;ll see work divided into stages: Pending, In Progress, Ready for Review, etc. <br/>
                You work with prioritized tasks, focusing on what&apos;s most valuable to the business first.
              </p>            
            </CardContent>
          </Card>
          <Card className="cursor-pointer p-5 bg-neutral-900 text-white">
            <CardHeader>
              <CardTitle>✅ Flexible prioritization</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                You can change priorities if something important comes up, and you can adapt quickly.
                <br/>
                You have a work system that responds to your business needs.
              </p>
            </CardContent>          
          </Card>
          <Card className="cursor-pointer p-5 bg-neutral-900 text-white">
            <CardHeader>
              <CardTitle> ✅ Responsibility and focus  </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Every team member knows what they need to do.
                <br/>
                There&apos;s no disorganization or loose tasks.
              </p>            
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default MethodologySection
